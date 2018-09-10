
// @flow

/*::
//type _ExtractReturn<B, F: (...args: any[]) => B> = B;
//type ExtractReturn<F> = _ExtractReturn<*, F>;

export type UiTheme =
  | 'DARK'
  | 'LIGHT'
  | 'SAND';

export type AppState = {
  +boardId: string,
  +boardIds: Array<string>,
  +uiTheme: UiTheme
};

export type Board = {
  +id: string,
  +title: string,
  +columnIds: Array<string>
};

export type BoardState = {
  +[key: string]: Board
};

export type Topic = {
  +id: string,
  +title: string,
  +noteIds: Array<string>,
  +withAdd?: bool,
  +isHide?: bool
};
export type TopicState = {
  +[key: string]: Topic
};

export type Note = {
  +id: string,
  +title: string
};
export type NoteState = {
  +[key: string]: Note
} | {};

export type ModalState = {
  id: ?string,
  data: ?{}
};

export type DrawerMsg = {
  +id: string,
  +msg: string
};
export type DrawerMsgState = Array<DrawerMsg>;

export type StoreState = {
  +app: AppState,
  +boards: BoardState,
  +columns: TopicState,
  +drawerMsg: DrawerMsgState,
  +modal: ModalState,
  +notes: NoteState
};

*/
