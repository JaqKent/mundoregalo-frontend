/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { FirestoreCollections } from '~configs/enums';
import { database } from '~configs/firebaseConfig';
import { Category, Department } from '~interfaces/interfaces';

interface DepartmentContextProps {
  departments: Department[];
  allCategories: Category[];
  isLoading: boolean;
  fetchDepartments: () => void;
  getCategoriesByDepartment: (id: string) => Category[] | undefined;
}

export const DepartmentContext = createContext<DepartmentContextProps>({
  departments: [],
  allCategories: [],
  isLoading: true,
  fetchDepartments: () => {},
  getCategoriesByDepartment: () => [],
});

export default function DepartmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDepartments = useCallback(() => {
    setLoading(true);
    const ref = collection(database, FirestoreCollections.Departments);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const data: Department[] = snapshot.docs.map((doc) => ({
          ...(doc.data() as Omit<Department, 'id'>),
          id: doc.id,
        }));

        setDepartments(data);

        setLoading(false);
      },
      () => setLoading(false)
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  const allCategories = useMemo(() => {
    return departments.flatMap((dep) =>
      dep.categories.map((cat) => ({
        ...cat,
        departmentId: dep.id,
        departmentName: dep.name,
      }))
    );
  }, [departments]);

  const getCategoriesByDepartment = (id: string) => {
    const department = departments.find((dep) => dep.id === id);
    return department?.categories;
  };

  const value = useMemo(
    () => ({
      departments,
      allCategories,
      isLoading: loading,
      fetchDepartments,
      getCategoriesByDepartment,
    }),
    [
      departments,
      allCategories,
      loading,
      fetchDepartments,
      getCategoriesByDepartment,
    ]
  );

  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  );
}
