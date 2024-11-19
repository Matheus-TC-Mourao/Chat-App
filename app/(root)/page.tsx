import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
}

export function Home({ children }: Props) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card className="flex flex-col gap-6 rounded-lg items-center p-10 justify-between bg-orange-900">
        <CardTitle className="lg:text-5xl">Welcome to Chat App</CardTitle>
        <CardDescription> Click the button to Signin</CardDescription>
        <Button>{children}</Button>
      </Card>
    </div>
  );
}
