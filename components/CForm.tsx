import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export function CForm() {
  return (
    <Card color="transparent" shadow={false}>
      <form>
        <div className="mb-4 flex flex-col gap-6">
          <Input className="" type="text" size="lg" label="Name" />
          <Input className="" type="email" size="lg" label="Email" />
          <Input className="" type="number" size="lg" label="Phone" />
          <Input className="" type="url" size="lg" label="Website URL" />
        </div>
        <Textarea label="Write your message here" />
        <Button className="mt-6 p-3" fullWidth>
          SEND NOW
        </Button>
      </form>
    </Card>
  );
}