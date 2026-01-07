import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BootScreen } from "@/components/BootScreen";

const Index = () => {
  const [booted, setBooted] = useState(false);
  const navigate = useNavigate();

  const handleBootComplete = () => {
    setBooted(true);
    navigate("/terminal");
  };

  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return null;
};

export default Index;
