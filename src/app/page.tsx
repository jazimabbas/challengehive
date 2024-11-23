import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-[100vh] w-full">
      <div className="flex h-full flex-col items-center justify-center">
        <p>ChallengeHive Platform - LeetCode Clone</p>
        <Button className="w-fit">CTA</Button>
      </div>
    </div>
  );
}
