import express from "express";
import { supabase } from "../supabase.js";
import { requireAdmin } from "../adminGuard.js";

const router = express.Router();

router.get("/bookings", requireAdmin, async (_req, res) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json(error);
  res.json(data);
});

router.patch("/bookings/:id", requireAdmin, async (req, res) => {
  const { status } = req.body;

  const { error } = await supabase
    .from("bookings")
    .update({ status })
    .eq("id", req.params.id);

  if (error) return res.status(500).json(error);
  res.json({ success: true });
});

export default router;
