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
      className={`${monthIsSelected ? 'bg-green text-white hover:bg-navy' : 'bg-white text-green hover:bg-navy hover:text-white'} mt-4 w-20 border border-navy text-textMd text-center text-semibold  cursor-pointer md:w-28`}
    >
      {monthData.month}
    </button>
  );
}
