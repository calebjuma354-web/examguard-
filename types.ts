export type UserRole = 'super_admin' | 'institution_admin' | 'exam_officer' | 'invigilator';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  institutionId?: string;
  avatar?: string;
}

export interface Institution {
  id: string;
  name: string;
  code: string;
  type: 'University' | 'College' | 'High School' | 'Exam Centre';
  city: string;
  country: string;
  activeRooms: number;
  totalCandidates: number;
  status: 'active' | 'suspended' | 'pending';
}

export interface Room {
  id: string;
  institutionId: string;
  name: string;
  code: string;
  capacity: number;
  cctvCount: number;
  sensorCount: number;
  rfDetectors: number;
  status: 'active' | 'idle' | 'maintenance' | 'alert';
  currentExam?: string;
  temp: number;
  humidity: number;
}

export interface Candidate {
  id: string;
  admissionNo: string;
  name: string;
  institutionId: string;
  examId: string;
  roomId: string;
  seatNumber: string;
  attendanceStatus: 'present' | 'absent' | 'late' | 'flagged';
  biometricVerified: boolean;
  photoUrl: string;
}

export interface ExamSession {
  id: string;
  code: string;
  title: string;
  subject: string;
  institutionId: string;
  scheduledStart: string;
  scheduledEnd: string;
  status: 'upcoming' | 'in_progress' | 'completed' | 'cancelled';
  assignedInvigilators: string[];
  totalCandidates: number;
  presentCount: number;
}

export interface Device {
  id: string;
  name: string;
  type: 'cctv' | 'rf_sensor' | 'env_sensor' | 'biometric';
  roomId: string;
  ipAddress: string;
  status: 'online' | 'offline' | 'warning';
  batteryLevel?: number;
  lastPing: string;
  hardwareType: 'ESP32' | 'Arduino' | 'SDR_Receiver' | 'IP_Camera' | 'Custom_RF';
  isSimulated: boolean;
}

export interface RFSignalLog {
  id: string;
  timestamp: string;
  sensorId: string;
  roomId: string;
  frequencyMHz: number;
  signalStrengthDbm: number;
  estimatedDistanceMeters: number;
  suspectedDesk?: string;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  isSimulated: boolean;
}

export interface AIAlert {
  id: string;
  timestamp: string;
  roomId: string;
  cameraName: string;
  detectionType: 'Unauthorised Device' | 'Suspicious Movement' | 'Impersonation Risk' | 'Material Leak' | 'Environmental Hazard';
  confidenceScore: number;
  snapshotUrl: string;
  status: 'pending_review' | 'verified_cheat' | 'false_positive' | 'dismissed';
  verifiedBy?: string;
  isSimulated: boolean;
}

export interface IncidentReport {
  id: string;
  ticketNo: string;
  timestamp: string;
  institutionId: string;
  roomId: string;
  category: 'RF Detection' | 'Visual Cheating' | 'Unauthorized Material' | 'Biometric Mismatch' | 'Disruptive Behaviour';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  invigilatorId: string;
  assignedOfficerId?: string;
  status: 'open' | 'investigating' | 'resolved' | 'escalated';
  evidenceUrls: string[];
}
