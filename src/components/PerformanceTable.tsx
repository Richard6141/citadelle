import { TrendingUp, TrendingDown } from "lucide-react";

interface PerformanceRow {
  period: string;
  signals: number;
  winRate: string;
  profit: string;
  isPositive: boolean;
}

interface PerformanceTableProps {
  data: PerformanceRow[];
}

const PerformanceTable = ({ data }: PerformanceTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Période</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Signaux</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Win Rate</th>
            <th className="text-right py-4 px-4 text-sm font-semibold text-foreground">Résultat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
              <td className="py-4 px-4 text-sm text-foreground font-medium">{row.period}</td>
              <td className="py-4 px-4 text-sm text-center text-muted-foreground">{row.signals}</td>
              <td className="py-4 px-4 text-sm text-center">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">
                  {row.winRate}
                </span>
              </td>
              <td className="py-4 px-4 text-sm text-right">
                <span className={`inline-flex items-center gap-1 font-semibold ${row.isPositive ? "text-secondary" : "text-destructive"}`}>
                  {row.isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {row.profit}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTable;
