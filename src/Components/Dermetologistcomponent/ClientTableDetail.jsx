import { X, Check, XCircle } from "lucide-react";
import cheekbone from "../../assets/images/cheekbone.jpg";
import { Link } from "react-router";
import { useState } from "react";
import { Badge } from "@/Components/ui/badge";

export default function ClientTableDetail({ detail, visible, setShowDetail, onStatusUpdate, updatingId }) {
  const [error, setError] = useState(null);
  const [processingAction, setProcessingAction] = useState(null);

  const handleStatusUpdate = async (newStatus) => {
    setError(null);
    setProcessingAction(newStatus);
    
    if (onStatusUpdate) {
      try {
        await onStatusUpdate(detail.id, newStatus);
      } catch (err) {
        setError(`Failed to ${newStatus} appointment. Please try again.`);
      } finally {
        setProcessingAction(null);
      }
    }
  };

  const getStatusVariant = (status) => {
    const statusLower = status?.toLowerCase();
    if (statusLower === "accepted") return "accepted";
    if (statusLower === "rejected") return "rejected";
    return "pending";
  };

  return (
    <section
      className="bg-white rounded-xl p-3 shadow-md w-full lg:w-[296px] h-auto space-y-4 mb-4"
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Client Details</h1>
        <button
          onClick={() => {
            setShowDetail(false);
          }}
          className="h-[25px] w-[25px] rounded-full bg-gradient-to-r from-[#1A151D] to-[#755F83] text-white flex justify-center items-center hover:opacity-90 transition"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex flex-col justify-center mt-3 items-center">
        <img
          src={detail.user?.profile?.image || cheekbone}
          alt=""
          className="rounded-full md:h-[185px] md:w-[185px] mb-3 border border-light-border object-cover"
        />
        <p className="font-inter text-primary font-bold">{detail.user?.name}</p>
      </div>

      <div className="flex justify-between px-2 font-inter text-primary">
        <h1>{detail.gender}</h1>
        <p>{detail.skinType}</p>
      </div>

      <p className="text-[#6B6A6C] px-2 font-inter text-center text-sm">
        {detail.description}
      </p>

      {/* Status Badge */}
      <div className="flex justify-center">
        <Badge variant={getStatusVariant(detail.status)} className="px-4 py-1">
          {detail.status}
        </Badge>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Approve/Reject Buttons - Show for all appointments but disable if not pending */}
      <div className="flex gap-2 px-2">
        <button
          onClick={() => handleStatusUpdate("accepted")}
          disabled={updatingId === detail.id || detail.status?.toLowerCase() !== "pending"}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition text-sm font-medium ${
            detail.status?.toLowerCase() !== "pending"
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : updatingId === detail.id
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
          }`}
          title={detail.status?.toLowerCase() === "pending" ? "Accept appointment" : "Already processed"}
        >
          <Check size={16} />
          {updatingId === detail.id && processingAction === "accepted" ? "Processing..." : "Accept"}
        </button>
        <button
          onClick={() => handleStatusUpdate("rejected")}
          disabled={updatingId === detail.id || detail.status?.toLowerCase() !== "pending"}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition text-sm font-medium ${
            detail.status?.toLowerCase() !== "pending"
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : updatingId === detail.id
              ? "bg-red-400 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700 cursor-pointer"
          }`}
          title={detail.status?.toLowerCase() === "pending" ? "Reject appointment" : "Already processed"}
        >
          <XCircle size={16} />
          {updatingId === detail.id && processingAction === "rejected" ? "Processing..." : "Reject"}
        </button>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <Link
          to="/demoverview"
          className="h-10 text-sm border border-primary rounded-full bg-secondary-text text-white cursor-pointer flex justify-center items-center hover:opacity-90 transition"
        >
          View User Data
        </Link>

        <Link
          to={`/ai-analyze/report/${detail.user?.id}`}
          state={{ analysisData: detail.analysisReport?.analysis }}
          className="h-10 text-xs border rounded-full hover:bg-secondary-text hover:text-white cursor-pointer flex justify-center items-center transition"
        >
          View AI Skin Report
        </Link>
      </div>
    </section>
  );
}
