import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    canEdit?: boolean;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className,
    canEdit,
  } = props;

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title="Профиль" />
      {
        canEdit && (
          readonly
            ? (
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINED}
                onClick={onEdit}
              >
                Редактировать
              </Button>
            )
            : (
              <>
                <Button
                  className={cls.editBtn}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  Отменить
                </Button>
                <Button
                  className={cls.saveBtn}
                  theme={ButtonTheme.OUTLINED}
                  onClick={onSave}
                >
                  Сохранить
                </Button>
              </>
            )
        )
      }
    </div>
  );
};
