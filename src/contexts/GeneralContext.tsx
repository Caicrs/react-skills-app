import { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';

interface GeneralContextData {
	stage: number;
	setStage: React.Dispatch<React.SetStateAction<number>>;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Joining all variables that we want to export
	return (
		<GeneralContext.Provider
			value={{
				stage,
				setStage,
				isLoading,
				setIsLoading,
			}}>
			{isLoading && <Loading />}
			{children}
		</GeneralContext.Provider>
	);
};

// Exporting the variables, and can be used for GET this variables exported
export function useGeneral() {
	const context = useContext(GeneralContext);
	return context;
}
