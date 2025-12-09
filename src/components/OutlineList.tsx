import React from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectAll, setRowCheckbox } from "@/redux/outlineSlice";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { setReviewer } from "@/redux/reviewer";

interface OutlineItem {
  id: number;
  title: string;
  type: string;
  status: string;
  target: number;
  limit: number;
  reviewer?: string;
}

// A shadcn-like styled outline list. Accepts `items` prop; otherwise uses sample data.
const sample: OutlineItem[] = [
  {
    id: 1,
    title: "Cover page",
    type: "Cover page",
    status: "In Process",
    target: 18,
    limit: 5,
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    title: "Table of contents",
    type: "Table of contents",
    status: "Done",
    target: 29,
    limit: 24,
    reviewer: "Eddie Lake",
  },
  {
    id: 3,
    title: "Executive summary",
    type: "Narrative",
    status: "Done",
    target: 10,
    limit: 13,
    reviewer: "Eddie Lake",
  },
  {
    id: 4,
    title: "Technical approach",
    type: "Narrative",
    status: "Done",
    target: 27,
    limit: 23,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 5,
    title: "Design",
    type: "Narrative",
    status: "In Process",
    target: 2,
    limit: 16,
    reviewer: "Jamik Tashpulatov",
  },
];

function statusBadge(status: string) {
  if (!status) return null;
  const s = status.toLowerCase();
  if (s.includes("done"))
    return (
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-sm text-muted-foreground">Done</span>
      </div>
    );
  if (s.includes("in process") || s.includes("in progress"))
    return (
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="text-sm text-muted-foreground">In Process</span>
      </div>
    );
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-gray-400" />
      <span className="text-sm text-muted-foreground">{status}</span>
    </div>
  );
}

type Props = { items?: OutlineItem[] };

export default function OutlineList({ items }: Props) {
  const dispatch = useAppDispatch();
  // const reviewer = useAppSelector((state) => state.reviewer.reviewer);
  const selectAll = useAppSelector((state) => state.outline.selectAll);
  const checkedRows = useAppSelector((state) => state.outline.checkedRows) as
    | Record<number, boolean>
    | undefined;

  const list = items && items.length ? items : sample;

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    dispatch(setSelectAll(newChecked));
    list.forEach((row) => {
      dispatch(setRowCheckbox({ id: row.id, checked: newChecked }));
    });
  };

  const handleRowCheckbox = (rowId: number, checked: boolean) => {
    dispatch(setRowCheckbox({ id: rowId, checked }));
    const allChecked = list.every((r) =>
      r.id === rowId ? checked : !!(checkedRows && checkedRows[r.id])
    );
    dispatch(setSelectAll(allChecked));
  };

  const handleReviewerChange = (value: string, rowId: number) => {
    dispatch(setReviewer(value));
    list.find((row) => row.id === rowId)!.reviewer = value;
  };

  return (
    <div className="rounded-lg bg-background p-4 max-lg:p-0 font-normal">
      <div className="flex items-center max-lg:flex-col max-lg:items-start max-lg:gap-4 justify-between mb-8">
        <div className="flex items-center max-lg:text-[12px] max-md:w-full gap-2 max-md:justify-between max-lg:gap-0 bg-zinc-300/50 border-none rounded-lg p-2">
          <Button variant="ghost" className={"rounded-lg  "}>
            Outline
          </Button>
          <Button variant="ghost">Past Performance</Button>
          <Button variant="ghost">Key Personnel</Button>
          <Button variant="ghost">Focus Documents</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Customize Columns
          </Button>
          <Button size="sm">+ Add Section</Button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-xl ">
        <table className="w-full min-w-[800px] ">
          <thead className="bg-zinc-300/55">
            <tr className="text-sm ">
              <th className="w-10">
                <input
                  type="checkbox"
                  checked={!!selectAll}
                  className="cursor-pointer"
                  onChange={handleSelectAll}
                  aria-label="select all"
                />
              </th>
              <th className="text-left px-3 py-3">Header</th>
              <th className="text-left px-3 py-3">Section Type</th>
              <th className="text-left px-3 py-3">Status</th>
              <th className="text-left px-3 py-3">Target</th>
              <th className="text-left px-3 py-3">Limit</th>
              <th className="text-left px-4 py-3">Reviewer</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row) => (
              <tr
                key={row.id}
                className="border-t border-gray-300 hover:bg-accent/50 transition-colors"
              >
                <td className="pl-3">
                  <input
                    type="checkbox"
                    checked={!!(checkedRows && checkedRows[row.id])}
                    onChange={(e) =>
                      handleRowCheckbox(row.id, e.target.checked)
                    }
                    aria-label={`select-${row.id}`}
                    className="cursor-pointer"
                  />
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    {/* <div className="w-2 h-6 bg-transparent rounded" /> */}
                    <span className="text-[16px] font-semibold px-3">
                      {row.title}
                    </span>
                  </div>
                </td>
                <td className="px-3">
                  <span className="inline-flex items-center rounded-full px-3 text-[12px] bg-gray-100 text-gray-700">
                    {row.type}
                  </span>
                </td>
                <td>{statusBadge(row.status)}</td>
                <td className="px-5 font-normal text-[18px]">{row.target}</td>
                <td className="px-5 font-normal text-[18px]">{row.limit}</td>

                {/* Reviewer Select Dropdown */}
                <td>
                  <Select
                    name="category"
                    onValueChange={(value) =>
                      handleReviewerChange(value, row.id)
                    }
                  >
                    <SelectTrigger className="w-[80%] my-2">
                      <SelectValue
                        placeholder={row.reviewer || "Assign reviewer"}
                      />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                      <SelectItem value="Jamik Tashpulatov">
                        Jamik Tashpulatov
                      </SelectItem>
                      <SelectItem value="Vladimir Putin">Vladimir Putin</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
