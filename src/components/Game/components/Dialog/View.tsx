import Dialog from "@/components/Dialog";
import { DialogProps } from "./View.types";

const View = ({ display, id, onClose }: DialogProps) => {
  return (
    <Dialog display={display} onClose={onClose}>
      {id}
    </Dialog>
  );
};

export default View;
