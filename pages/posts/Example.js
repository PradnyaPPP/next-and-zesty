import React,{ useCallback,useState } from "react";

import { Text,Accordion,AccordionSection,Button,Separator,Checkbox,Input,RadioGroup,TextArea,Dialog} from "@ftdr/blueprint-components-react";

export default function Example() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [headerText, setHeaderText] = useState("Dialog Title");
    const [bodyText, setBodyText] = useState("An important message.");
    const actionsCountRadios = [{ value: "0" }, { value: "1" }, { value: "2" }];
    const [actionsCount, setActionsCount] = useState(actionsCountRadios[2].value);
    const actionsAlignRadios = [{ value: "left" }, { value: "center" }, { value: "right" }];
    const [actionsAlign, setActionsAlign] = useState(actionsAlignRadios[2].value);
    const [modalDialog, setModalDialog] = useState(false);
    const handleModalDialogChange = useCallback((e) => {
    const modalDialog = e.target.checked;
    if (modalDialog) {
        setCloseOnOutsideClick(false);
        setShowBackdrop(true);
    } else {
        setCloseOnOutsideClick(true);
        setShowBackdrop(false);
    }
    setModalDialog(modalDialog);
    }, []);
    const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(!modalDialog);
    const [showBackdrop, setShowBackdrop] = useState(modalDialog);
    const actions = [
    <Button size="small" label="OK" />,
    <Button autoFocus={true} variant="ghost" size="small" label="Cancel" />,
    ];
  return (
      <div>
          <Text variant="heading-01" color="accent">Example text</Text>
            <Accordion mode="single">
            <AccordionSection label="Section 1">Para 1</AccordionSection>
            <AccordionSection label="Section 2">Para 1</AccordionSection>
            <AccordionSection label="Section 3">Para 1</AccordionSection>
        </Accordion>



        <div className="flex flex-col">
            <div className="flex flex-wrap">
            <Input
                label="Dialog header text"
                formField
                value={headerText}
                onChange={(e) => setHeaderText(e.target.value)}
                formFieldClassName="p-4 w-1/3"
            />
            <RadioGroup
                formField
                label="Dialog actions"
                radios={actionsCountRadios}
                value={actionsCount}
                onChange={setActionsCount}
                formFieldClassName="p-4 w-1/3"
            />
            <RadioGroup
                formField
                label="Dialog actions alignment"
                radios={actionsAlignRadios}
                value={actionsAlign}
                onChange={setActionsAlign}
                formFieldClassName="p-4 w-1/3"
            />
            <TextArea
                label="Dialog body text"
                formField
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                formFieldClassName="p-4 w-1/3"
            />
            <Checkbox label="Modal Dialog" checked={modalDialog} onChange={handleModalDialogChange} className="p-4 w-1/5" />
            <Checkbox
                label="Close on outside click"
                checked={closeOnOutsideClick}
                onChange={(e) => setCloseOnOutsideClick(e.target.checked)}
                disabled={modalDialog}
                className="p-4 w-1/5"
            />
            <Checkbox
                label="Show Backdrop"
                checked={showBackdrop}
                onChange={(e) => setShowBackdrop(e.target.checked)}
                disabled={modalDialog}
                className="p-4 w-1/5"
            />
            </div>
            <Separator orientation="horizontal" />
            <Button size="small" label="Open Dialog" onClick={() => setDialogOpen(true)} />
            <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            header={headerText}
            actions={+actionsCount === 0 ? undefined : actions.slice(0, +actionsCount)}
            actionsAlign={actionsAlign}
            modal={modalDialog}
            closeOnOutsideClick={closeOnOutsideClick}
            showBackdrop={showBackdrop}
            >
            <div>{bodyText}</div>
            </Dialog>
        </div>
      </div>
    
  );
}