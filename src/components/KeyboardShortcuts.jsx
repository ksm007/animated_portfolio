import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiQuestionMarkCircle, HiX } from "react-icons/hi";

const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: "Ctrl/Cmd + Home", action: "Scroll to top" },
    { key: "Ctrl/Cmd + End", action: "Scroll to bottom" },
    { key: "Alt + ↑", action: "Scroll up one section" },
    { key: "Alt + ↓", action: "Scroll down one section" },
    { key: "Tab", action: "Navigate through interactive elements" },
    { key: "Enter/Space", action: "Activate focused element" },
    { key: "Esc", action: "Close dialogs/modals" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "?" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Help Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 p-3 bg-background/80 backdrop-blur-sm border border-border text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Show keyboard shortcuts"
        title="Keyboard shortcuts (Ctrl/Cmd + ?)"
      >
        <HiQuestionMarkCircle size={20} />
      </button>

      {/* Shortcuts Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background border border-border rounded-xl shadow-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">
                  Keyboard Shortcuts
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Close shortcuts"
                >
                  <HiX size={20} />
                </button>
              </div>

              <div className="space-y-3">
                {shortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50"
                  >
                    <span className="text-sm text-muted-foreground">
                      {shortcut.action}
                    </span>
                    <kbd className="px-2 py-1 text-xs font-mono bg-background border border-border rounded">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-xs text-muted-foreground text-center">
                Press <kbd className="px-1 py-0.5 bg-muted rounded">Esc</kbd> or
                click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
