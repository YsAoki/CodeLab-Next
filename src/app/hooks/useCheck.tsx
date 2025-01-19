"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { NOT_FOUND_INDEX } from "../constants/statusCode";

export const useCheck = (defaultValue: string[] = []) => {
  const [check, setCheck] = useState(defaultValue);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const onChangeCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const copy = [...check];
      // value値が配列に含まれていない場合は追加する
      if (!copy.includes(value)) {
        copy.push(value);
        return setCheck(copy);
      }
      // value値が配列に含まれている場合は削除する
      const targetIndex = copy.findIndex((item) => item === value);
      if (targetIndex === NOT_FOUND_INDEX) return;
      copy.splice(targetIndex, 1);
      setCheck(copy);
    },
    [check]
  );

  return [check, setCheck, onChangeCheck, validationMessage, setValidationMessage] as const;
};
