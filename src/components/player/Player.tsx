export type PlayerProps = {
  name: string;
  pj: number;
  pg: number;
  pp: number;
  jf: number;
  jc: number;
  dif: number;
};

export default function Player({
  playerData,
  ranking
}: {
  playerData: PlayerProps;
  ranking: number
}) {
   return (
    <>
      <tr>
        <td>{ranking}</td>
        <td className="font-semibold text-left pl-2">{playerData.name}</td>
        <td>{playerData.pj}</td>
        <td>{playerData.pg}</td>
        <td>{playerData.pp}</td>
        <td>{playerData.jf}</td>
        <td>{playerData.jc}</td>
        <td>{playerData.dif}</td>
      </tr>
    </>
  );
}
