import React from "react";
import "./styles.css";

function EditModal({
  event = {},
  setEvent = () => {},
  onClose = () => {},
  onSave = () => {},
}) {
  function handleSave() {
    onSave();
    onClose();
  }

  return (
    <div className="edit-modal__container">
      <h2 className="edit-modal__title roboto-bold">Edit event</h2>
      <div className="edit-modal__body">
        <div className="edit-modal__input-group">
          <label className="edit-modal__label roboto-medium">Name:</label>
          <input
            type="text"
            value={event.name}
            onChange={(e) => setEvent({ ...event, name: e.target.value })}
          />
        </div>
        <div className="edit-modal__input-group">
          <label className="edit-modal__label roboto-medium">Start date:</label>
          <input
            type="date"
            disabled
            value={event.start}
            onChange={(e) => setEvent({ ...event, start: e.target.value })}
          />
        </div>
        <div className="edit-modal__input-group">
          <label className="edit-modal__label roboto-medium">End date:</label>
          <input
            type="date"
            disabled
            value={event.end}
            onChange={(e) => setEvent({ ...event, end: e.target.value })}
          />
        </div>
      </div>
      <div className="edit-modal__footer">
        <button className="edit-modal__button roboto-medium" onClick={onClose}>
          Cancel
        </button>
        <button
          className="edit-modal__button roboto-medium"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditModal;
