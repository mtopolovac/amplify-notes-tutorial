import { useState } from "react";
import {
  CreateNote,
  NavBar,
  NoteUICollection,
  UpdateNote,
} from "./ui-components";

function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [updateNote, setUpdateNote] = useState(null);

  return (
    <>
      <NavBar
        width={"100%"}
        marginBottom={20}
        overrides={{
          Button31632483: { onClick: () => setCreateModalOpen(true) },
        }}
      />
      <NoteUICollection
        overrideItems={({ item, index }) => {
          return {
            overrides: {
              Vector31472745: {
                onClick: () => {
                  setUpdateOpen(true);
                  setUpdateNote(item);
                },
              },
            },
          };
        }}
      />

      {createModalOpen && (
        <div className="modal">
          <CreateNote
            overrides={{
              MyIcon: {
                as: "button",
                onClick: () => setCreateModalOpen(false),
              },
            }}
          />
        </div>
      )}
      {updateOpen && (
        <div className="modal">
          <UpdateNote
            note={updateNote}
            overrides={{
              MyIcon: {
                as: "button",
                onClick: () => setUpdateOpen(false),
              },
            }}
          />
        </div>
      )}
    </>
  );
}

export default App;
