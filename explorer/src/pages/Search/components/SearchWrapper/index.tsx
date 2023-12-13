import { PropsWithChildren } from "react";

interface SearchWrapperProps extends PropsWithChildren {
  title: string;
  items: number;
}

export const SearchWrapper: React.FC<SearchWrapperProps> = ({ title, items, children }) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-2xl text-text-primary font-semibold">{`${items} ${title}`}</p>
      {children}
    </div>
  );
};