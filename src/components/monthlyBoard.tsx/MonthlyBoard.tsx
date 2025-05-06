import { useEffect, useState } from 'react';
import { LeagueDataProps } from '../leagueData/LeagueData';

export type MonthlyDataProps = {
  month: string;
  monthData: LeagueDataProps[];
};

export default function MonthlyBoard({
  monthData,
  selectedMonth,
  onClick
}: {
  monthData: MonthlyDataProps;
  selectedMonth: string;
  onClick: (event: any) => void;
}) {
  const monthIsSelected = selectedMonth === monthData.month;

  return (
    <button
      onClick={onClick}
      className={`${monthIsSelected ? 'text-green' : 'text-darkGray'} font-medium mt-4 w-20 text-textMd text-center text-semibold  cursor-pointer hover:text-navy md:w-28`}
    >
      {monthData.month}
    </button>
  );
}
