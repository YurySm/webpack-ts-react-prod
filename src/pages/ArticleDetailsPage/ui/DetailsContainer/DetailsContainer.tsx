import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = (props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    return (
        <Card className={className} padding={'16'}>
            <ArticleDetails id={id} />;
        </Card>
    );
};
