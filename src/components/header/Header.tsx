export default function Header({ divisionNumber }: { divisionNumber: string }) {
  return (
    <h1 className="text-header text-navy text-center mt-6">
      División {divisionNumber}
    </h1>
  );
}
