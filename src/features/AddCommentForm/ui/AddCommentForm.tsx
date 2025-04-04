
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
    } = props;
    return (
        <div className={ classNames(cls.addCommentFormProps, {}, [className]) }>

        </div>
    );
};