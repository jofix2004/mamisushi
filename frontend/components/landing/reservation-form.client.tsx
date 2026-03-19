"use client";

import { useMemo, useState, useTransition } from "react";

import type { Branch } from "@/lib/landing-data";

import { ArrowRightIcon } from "./primitives/icons";
import { InputField } from "./primitives/input-field";
import { TextareaField } from "./primitives/textarea-field";

type ReservationFormProps = {
  branches: Branch[];
};

type FormValues = {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  branch: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  guests: "",
  date: "",
  time: "",
  branch: "",
  notes: "",
};

export function ReservationForm({ branches }: ReservationFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState<{
    tone: "success" | "error";
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const branchOptions = useMemo(
    () => branches.map((branch) => branch.name),
    [branches],
  );

  function validate(nextValues: FormValues) {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) nextErrors.name = "Vui lòng nhập tên của bạn.";
    if (!nextValues.phone.trim()) {
      nextErrors.phone = "Vui lòng nhập số điện thoại để quán liên hệ.";
    }
    if (!nextValues.guests.trim()) nextErrors.guests = "Hãy cho biết số người.";
    if (!nextValues.date.trim()) nextErrors.date = "Hãy chọn ngày bạn muốn đặt.";
    if (!nextValues.time.trim()) nextErrors.time = "Hãy chọn giờ bạn muốn đặt.";
    if (!nextValues.branch.trim()) {
      nextErrors.branch = "Hãy chọn chi nhánh bạn muốn ghé.";
    }

    return nextErrors;
  }

  function updateValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFeedback({
        tone: "error",
        message: "Thông tin chưa đủ. Vui lòng kiểm tra lại số điện thoại, ngày và giờ.",
      });
      return;
    }

    setFeedback(null);
    await new Promise((resolve) => setTimeout(resolve, 900));

    startTransition(() => {
      setFeedback({
        tone: "success",
        message: "Đã gửi yêu cầu đặt bàn. Quán sẽ liên hệ xác nhận sớm.",
      });
      setValues(initialValues);
      setErrors({});
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid max-w-[35rem] gap-7 border-t border-line pt-7"
    >
      <div className="grid gap-5">
        <InputField
          id="name"
          label="Họ và tên"
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          placeholder="Nhập tên của bạn"
          error={errors.name}
        />
        <InputField
          id="phone"
          label="Số điện thoại"
          value={values.phone}
          onChange={(event) => updateValue("phone", event.target.value)}
          placeholder="Nhập số để quán liên hệ"
          error={errors.phone}
        />
        <InputField
          id="guests"
          label="Số người"
          type="number"
          min={1}
          value={values.guests}
          onChange={(event) => updateValue("guests", event.target.value)}
          placeholder="2, 4, 6"
          error={errors.guests}
        />
        <div className="grid gap-2">
          <label
            htmlFor="branch"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft"
          >
            Chi nhánh
          </label>
          <select
            id="branch"
            name="branch"
            value={values.branch}
            onChange={(event) => updateValue("branch", event.target.value)}
            aria-invalid={Boolean(errors.branch)}
            className={`min-h-[3.25rem] rounded-none border-0 border-b bg-transparent px-0 pb-3 pt-2 text-sm text-ink outline-none ${
              errors.branch ? "border-error" : "border-line"
            }`}
          >
            <option value="">Chọn chi nhánh bạn muốn ghé</option>
            {branchOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.branch ? (
            <p className="text-sm text-error">{errors.branch}</p>
          ) : null}
        </div>
        <InputField
          id="date"
          label="Ngày"
          type="date"
          value={values.date}
          onChange={(event) => updateValue("date", event.target.value)}
          error={errors.date}
        />
        <InputField
          id="time"
          label="Giờ"
          type="time"
          value={values.time}
          onChange={(event) => updateValue("time", event.target.value)}
          error={errors.time}
        />
      </div>

      <TextareaField
        id="notes"
        label="Ghi chú"
        value={values.notes}
        onChange={(event) => updateValue("notes", event.target.value)}
        placeholder="Thêm yêu cầu nếu cần"
      />

      <div className="grid gap-3 pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-fit items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-accent hover:text-accent-deep active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Đang gửi yêu cầu..." : "Gửi yêu cầu đặt bàn"}
          <ArrowRightIcon className="size-[18px]" />
        </button>

        <div aria-live="polite" className="min-h-6">
          {feedback ? (
            <p
              className={`text-sm ${
                feedback.tone === "success" ? "text-success" : "text-error"
              }`}
            >
              {feedback.message}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
