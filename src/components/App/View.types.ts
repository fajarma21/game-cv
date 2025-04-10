import { BlockerData } from "@/types";

export interface CollisionData {
  id: number;
  from: string;
  blockerData: BlockerData | null;
}
