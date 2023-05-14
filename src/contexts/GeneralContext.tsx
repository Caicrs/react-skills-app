import { createContext, useContext, useState } from 'react';

interface GeneralContextData {
	stage: number;
	setStage: React.Dispatch<React.SetStateAction<number>>;
}

export const GeneralContext = createContext<GeneralContextData>(
	{} as GeneralContextData
);

interface GeneralProps {
	children?: React.ReactNode;
	navigation?: any;
}

export const GeneralProvider: React.FC<GeneralProps> = ({ children }) => {
	const [stage, setStage] = useState<number>(1);
	// Joining all variables that we want to export
	return (
		<GeneralContext.Provider
			value={{
				stage,
				setStage,
			}}>
			{children}
		</GeneralContext.Provider>
	);
};

// Exporting the variables, and can be used for GET this variables exported
export function useGeneral() {
	const context = useContext(GeneralContext);
	return context;
}
