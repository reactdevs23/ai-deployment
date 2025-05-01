import clsx from "clsx";
import classes from "./ChatInput.module.css";
const ImgUpload = ({ preview, uploading, handleCancelUpload }) => {
  return (
    <>
      {preview && (
        <div className={classes.previewContainer}>
          <img
            src={preview}
            alt="Uploaded preview"
            className={clsx(classes.previewImage, {
              [classes.blur]: uploading,
            })}
          />
          {uploading && (
            <div className={classes.loaderOverlay}>
              <div className={classes.loader}></div>
            </div>
          )}
          <button className={classes.cancelButton} onClick={handleCancelUpload}>
            ✕
          </button>
        </div>
      )}
    </>
  );
};
export default ImgUpload;
