type SubmitButtonProps = {
  disabled?: boolean;
  loading?: boolean;
};

const SubmitButton = ({
  disabled = false,
  loading = false,
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-bold text-white bg-blue-500 hover:bg-blue-600 transition ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "送信中..." : "送信"}
    </button>
  );
};

export default SubmitButton;
