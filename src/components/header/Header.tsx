export default function Header({divisionNumber} : {divisionNumber: string} ) {
  return (
    <h1 className="text-header text-navy text-center mb-4 lg:text-headerLg">
      División {divisionNumber}
    </h1>
  );
}
