import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
export default function Moldal(props) {
  const [variant, setVariant] = React.useState(undefined);
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          variant="soft"
          color="neutral"
          onClick={() => {
            setVariant("soft");
          }}
        ></Button>
      </Stack>
      <Modal open={!!variant} onClose={() => setVariant(undefined)}>
        <ModalDialog variant={variant}>
          <ModalClose />
          <DialogTitle>Explicação</DialogTitle>
          <DialogContent>This is a `{variant}` modal dialog.</DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}
