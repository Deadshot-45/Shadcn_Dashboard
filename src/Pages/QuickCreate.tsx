import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  setTitle,
  setDescription,
  setCategory,
  setIsPublished,
} from "@/redux/quickFormSlice";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QuickCreate = () => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.quickForm);

  const handleCreate = () => {
    console.log("Creating entry:", formState);
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setCategory(""));
    dispatch(setIsPublished(false));
    // TODO: call API or perform further actions
  };

  return (
    <div className="w-[55dvh] min-w-[40dvh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 md:p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Quick Create</h1>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Create New Entry</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter title"
            id="title"
            name="title"
            value={formState.title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
          <Textarea
            placeholder="Enter description"
            id="description"
            name="description"
            value={formState.description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
          <Select
            name="category"
            onValueChange={(value) => dispatch(setCategory(value))}
          >
            <SelectTrigger className="w-full my-2">
              <SelectValue placeholder="Select category"  />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
              <SelectItem value="Jamik Tashpulatov">
                Jamik Tashpulatov
              </SelectItem>
              <SelectItem value="Vladimir Putin">Vladimir Putin</SelectItem>
            </SelectContent>
          </Select>
        
          {/* Optional: Checkbox for isPublished */}
          <div className="items-center space-x-2 hidden">
            <Input
              id="published"
              name="published"
              type="checkbox"
              checked={formState.isPublished}
              onChange={(e) => dispatch(setIsPublished(e.target.checked))}
            />
            <span>Publish</span>
          </div>

          <Button className="w-full mt-2" onClick={handleCreate}>
            Create
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickCreate;
