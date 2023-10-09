import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

export type TSidebarContext = {
  isOpen: boolean;
  activeItem: string;
  onToggle: () => void;
  setActiveItem: (item: string) => void;
};

const SidebarContext = createContext<TSidebarContext>({} as TSidebarContext);

interface ProviderProps {
  children: React.ReactNode;
}

const SidebarProvider = ({ children }: ProviderProps) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        activeItem,
        onToggle,
        setActiveItem,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarContext, SidebarProvider, useSidebarContext };
