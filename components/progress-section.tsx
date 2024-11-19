import { ProgressBar } from "@/components/progess-bar";

const ProgressSection = () => (
  <div className="flex items-center justify-around w-full max-w-3xl">
    <div className="xl:w-20 w-20 text-end">
      <h4 className="text-lg">0%</h4>
    </div>
    <ProgressBar />
    <div className="xl:w-20 w-24">
      <h4 className="text-lg">100%</h4>
    </div>
  </div>
);

export default ProgressSection;