import { Platform, ScaledSize, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useRealWindowDimensions = (): ScaledSize => {
	const { height, ...dimensions } = useWindowDimensions();
	const { bottom, top } = useSafeAreaInsets();

	return {
		height: Platform.OS === "ios" ? height : height + bottom + top,
		...dimensions,
	};
};

export default useRealWindowDimensions;