export default function Header({ divisionNumber }: { divisionNumber: string }) {
  return (
    <h1 className="text-header text-navy text-center m-4 xl:text-headerLg">
      División {divisionNumber}
    </h1>
  );
}
