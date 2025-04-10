import Dialog from "@/components/Dialog";
import { ItemDialogProps } from "./View.types";

const ItemDialog = ({ data, onClose }: ItemDialogProps) => {
  return <Dialog onClose={onClose}>{JSON.stringify(data)}</Dialog>;
};

export default ItemDialog;
