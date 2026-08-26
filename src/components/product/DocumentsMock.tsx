"use client";

import { useState } from "react";
import { FileText, CheckCircle, CircleDashed } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { SampleTag } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const checklist = [
  "Bill of lading",
  "Packing list",
  "Proof of delivery",
] as const;

export function DocumentsMock() {
  const [stage, setStage] = useState(0);
  const complete = stage >= 3;

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-[13px]">Document vault · SF-2408-1187</p>
        <SampleTag />
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div className="grid gap-3">
          {checklist.map((item, i) => (
            <motion.div
              key={item}
              className={cn(
                "flex items-center gap-3 rounded-[14px] border px-3 py-3",
                i < stage ? "border-ok/30 bg-ok/5" : "border-line bg-bg",
              )}
            >
              <FileText size={18} className="text-ink-2" />
              <div className="flex-1">
                <p className="text-[13px]">{item}</p>
                <p className="font-mono text-[11px] text-ink-3">
                  {i < stage ? "Verified · metadata extracted" : "Missing"}
                </p>
              </div>
              {i < stage ? (
                <CheckCircle size={18} className="text-ok" />
              ) : (
                <CircleDashed size={18} className="text-ink-3" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="rounded-[16px] border border-line bg-bg p-4">
          <p className="text-[12px] text-ink-3">OCR extraction</p>
          <div className="mt-3 min-h-[120px] rounded-[12px] border border-dashed border-line p-3 font-mono text-[12px] text-ink-2">
            {stage === 0
              ? "Drop a file or run the sample upload."
              : stage === 1
                ? "Scanning pages…"
                : "Shipper: Harborline\nConsignee: Northline DC\nContainer: SFLZ 441829 0\nSeal: 991204"}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-[12px] text-ink-2">
              Missing {Math.max(0, 3 - stage)} of 3
            </p>
            <Button
              size="sm"
              onClick={() => setStage((s) => Math.min(3, s + 1))}
              disabled={complete}
            >
              {complete ? "Checklist clear" : stage === 0 ? "Upload sample" : "Continue scan"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
