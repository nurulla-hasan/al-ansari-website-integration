import { useTranslations } from "next-intl";

const ErrorDisplay = ({ message }) => {
  const tCommon = useTranslations('common');
  const displayMessage = message || tCommon('somethingWentWrong');
  return (
    <div className="flex items-center justify-center h-full p-4 text-red-600">
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default ErrorDisplay;
