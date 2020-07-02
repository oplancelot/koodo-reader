import BookModel from "../../model/Book";
export interface TokenDialogProps {
  handleTokenDialog: (isShow: boolean) => void;
  currentBook: BookModel;
  driveName: string;
  url: string;
  handleMessage: (message: string) => void;
  handleMessageBox: (isShow: boolean) => void;
}
export interface TokenDialogState {
  isNew: boolean;
}
