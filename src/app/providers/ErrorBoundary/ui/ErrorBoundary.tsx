import {
	Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import { PageError } from 'widgets/PageError';
import { Loader } from 'shared/ui/Loader/Loader';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		 
		console.log(error, errorInfo);
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;

		if (hasError) {
			return (
				<Suspense fallback={ <Loader /> }>
					<PageError />
				</Suspense>
			);
		}

		return children;
	} 
}

export default ErrorBoundary;
