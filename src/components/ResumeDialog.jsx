import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiDownload, HiEye } from "react-icons/hi";

const ResumeDialog = ({ isOpen, onClose, resumeUrl = "/resume.pdf" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kartik_Marathe_Resume.pdf";
    link.click();
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <HiEye className="text-primary" />
                Resume
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-md hover:bg-muted transition-colors text-primary"
                  title="View Resume"
                >
                  <HiDownload size={20} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                  title="Close"
                >
                  <HiX size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative">
              {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Loading resume...
                    </p>
                  </div>
                </div>
              )}

              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background">
                  <div className="text-center p-8">
                    <HiEye className="mx-auto mb-4 text-4xl text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">
                      Resume Preview Unavailable
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      The resume preview couldn't load. You can download it
                      directly.
                    </p>
                    <button
                      onClick={handleDownload}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Download Resume
                    </button>
                  </div>
                </div>
              )}

              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full rounded-b-lg"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title="Resume"
                style={{ display: hasError ? "none" : "block" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Hook for easy usage
export const useResumeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openResume = () => setIsOpen(true);
  const closeResume = () => setIsOpen(false);

  return { isOpen, openResume, closeResume };
};

export default ResumeDialog;
