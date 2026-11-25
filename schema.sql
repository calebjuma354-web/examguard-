-- EXAMGUARD SUPABASE DATABASE SCHEMA
-- Execute in your Supabase SQL Editor

CREATE TYPE user_role AS ENUM ('super_admin', 'institution_admin', 'exam_officer', 'invigilator');
CREATE TYPE exam_status AS ENUM ('upcoming', 'in_progress', 'completed', 'cancelled');
CREATE TYPE incident_severity AS ENUM ('low', 'medium', 'high', 'critical');

-- 1. Institutions Table
CREATE TABLE public.institutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Examination Rooms
CREATE TABLE public.rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id UUID REFERENCES public.institutions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  code TEXT NOT NULL,
  capacity INT NOT NULL,
  cctv_count INT DEFAULT 0,
  rf_detectors INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Candidates
CREATE TABLE public.candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admission_no TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  institution_id UUID REFERENCES public.institutions(id),
  photo_url TEXT,
  biometric_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Examination Sessions
CREATE TABLE public.exam_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  institution_id UUID REFERENCES public.institutions(id),
  scheduled_start TIMESTAMPTZ NOT NULL,
  scheduled_end TIMESTAMPTZ NOT NULL,
  status exam_status DEFAULT 'upcoming',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. RF Signal Telemetry Logs
CREATE TABLE public.rf_signal_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES public.rooms(id),
  sensor_id TEXT NOT NULL,
  frequency_mhz NUMERIC(8,2) NOT NULL,
  signal_strength_dbm NUMERIC(5,2) NOT NULL,
  estimated_distance_m NUMERIC(4,2),
  suspected_desk TEXT,
  is_simulated BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Incident Reports
CREATE TABLE public.incident_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_no TEXT UNIQUE NOT NULL,
  institution_id UUID REFERENCES public.institutions(id),
  room_id UUID REFERENCES public.rooms(id),
  category TEXT NOT NULL,
  severity incident_severity NOT NULL,
  description TEXT NOT NULL,
  invigilator_name TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rf_signal_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public select for demo" ON public.institutions FOR SELECT USING (true);
CREATE POLICY "Allow public select for rooms" ON public.rooms FOR SELECT USING (true);
