import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";

function BookmarkPage() {
  const [folders, setFolders] = useState([]);

  const addFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      setFolders([...folders, { name: folderName, bookmarks: [] }]);
    }
  };

  const deleteFolder = (index) => {
    const updatedFolders = folders.filter((_, i) => i !== index);
    setFolders(updatedFolders);
  };

  const editFolder = (index) => {
    const newName = prompt("Enter new folder name:", folders[index].name);
    if (newName) {
      const updatedFolders = [...folders];
      updatedFolders[index].name = newName;
      setFolders(updatedFolders);
    }
    
  };

  const addBookmark = (index) => {
    const url = prompt("Enter URL:");
    const note = prompt("Enter a note for this URL:");
    if (url && note) {
      const updatedFolders = [...folders];
      updatedFolders[index].bookmarks.push({ url, note });
      setFolders(updatedFolders);
    }
  };

  const editBookmark = (folderIndex, bookmarkIndex) => {
    const updatedFolders = [...folders];
    const newUrl = prompt("Edit URL:", updatedFolders[folderIndex].bookmarks[bookmarkIndex].url);
    const newNote = prompt("Edit Note:", updatedFolders[folderIndex].bookmarks[bookmarkIndex].note);
    if (newUrl && newNote) {
      updatedFolders[folderIndex].bookmarks[bookmarkIndex] = { url: newUrl, note: newNote };
      setFolders(updatedFolders);
    }
  };

  const deleteBookmark = (folderIndex, bookmarkIndex) => {
    const updatedFolders = [...folders];
    updatedFolders[folderIndex].bookmarks.splice(bookmarkIndex, 1);
    setFolders(updatedFolders);
  };

  return (
    <div style={{ backgroundColor: "#333", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: "700", textAlign: "center" }}>
        Bookmark Manager
      </h1>
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", opacity: "0.8", textAlign: "center" }}>
        Welcome to your personal bookmark manager! Organize your URLs into different folders and add custom notes.
      </p>
      
      
      <div className="text-center mb-3">
        <a href="../index.html" className="btn btn-warning btn-lg" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem" }}>
          Home
        </a>
      </div>

      
      <div className="text-center mb-3">
        <button className="btn btn-primary btn-lg" onClick={addFolder} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem" }}>
          Add Folder
        </button>
      </div>

      
      <div className="row">
        {folders.map((folder, folderIndex) => (
          <div key={folderIndex} className="col-md-4">
            <div className="card p-3">
              <h3>{folder.name}</h3>
              <p>{folder.bookmarks.length} bookmarks</p>
              <button className="btn btn-warning" onClick={() => editFolder(folderIndex)}>
                Edit Folder
              </button>
              <button className="btn btn-danger ml-2" onClick={() => deleteFolder(folderIndex)}>
                Delete Folder
              </button>

              
              <div className="mt-3">
                <button className="btn btn-success" onClick={() => addBookmark(folderIndex)}>
                  Add Bookmark
                </button>
              </div>

              
              <div className="mt-3">
                {folder.bookmarks.map((bookmark, bookmarkIndex) => (
                  <div key={bookmarkIndex} className="card p-2 mb-2">
                    <p><strong>URL:</strong> {bookmark.url}</p>
                    <p><strong>Note:</strong> {bookmark.note}</p>
                    <button className="btn btn-info" onClick={() => editBookmark(folderIndex, bookmarkIndex)}>
                      Edit Bookmark
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => deleteBookmark(folderIndex, bookmarkIndex)}>
                      Delete Bookmark
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<BookmarkPage />);
