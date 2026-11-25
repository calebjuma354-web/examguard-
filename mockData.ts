import { User, Institution, Room, Candidate, ExamSession, Device, RFSignalLog, AIAlert, IncidentReport } from './types';

export const CURRENT_USER: User = {
  id: 'usr-001',
  name: 'Dr. Sarah Jenkins',
  email: 's.jenkins@examguard.io',
  role: 'super_admin',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
};

export const MOCK_INSTITUTIONS: Institution[] = [
  { id: 'inst-1', name: 'Apex National University', code: 'ANU-01', type: 'University', city: 'Nairobi', country: 'Kenya', activeRooms: 18, totalCandidates: 2450, status: 'active' },
  { id: 'inst-2', name: 'Global Institute of Technology', code: 'GIT-88', type: 'College', city: 'London', country: 'UK', activeRooms: 12, totalCandidates: 1200, status: 'active' },
  { id: 'inst-3', name: 'St. Jude International Academy', code: 'SJIA-04', type: 'High School', city: 'Boston', country: 'USA', activeRooms: 6, totalCandidates: 450, status: 'active' },
  { id: 'inst-4', name: 'Metro Exam Assessment Centre', code: 'MEAC-99', type: 'Exam Centre', city: 'Singapore', country: 'Singapore', activeRooms: 24, totalCandidates: 3100, status: 'active' },
];

export const MOCK_ROOMS: Room[] = [
  { id: 'rm-101', institutionId: 'inst-1', name: 'Main Hall A - Block 3', code: 'HALL-A3', capacity: 150, cctvCount: 4, sensorCount: 6, rfDetectors: 2, status: 'alert', currentExam: 'Advanced Cybersecurity CS401', temp: 22.4, humidity: 45 },
  { id: 'rm-102', institutionId: 'inst-1', name: 'Computer Lab 2B', code: 'LAB-2B', capacity: 60, cctvCount: 2, sensorCount: 4, rfDetectors: 1, status: 'active', currentExam: 'Database Systems DB202', temp: 21.0, humidity: 40 },
  { id: 'rm-103', institutionId: 'inst-1', name: 'Auditorium North', code: 'AUD-N', capacity: 300, cctvCount: 8, sensorCount: 12, rfDetectors: 4, status: 'active', currentExam: 'Linear Algebra MA101', temp: 23.5, humidity: 50 },
  { id: 'rm-104', institutionId: 'inst-2', name: 'Science Wing Room 14', code: 'SCI-14', capacity: 80, cctvCount: 3, sensorCount: 3, rfDetectors: 1, status: 'idle', temp: 20.8, humidity: 42 },
];

export const MOCK_SESSIONS: ExamSession[] = [
  { id: 'ex-501', code: 'CS401-2026', title: 'Advanced Cybersecurity & Cryptography', subject: 'Computer Science', institutionId: 'inst-1', scheduledStart: '2026-11-25T09:00:00', scheduledEnd: '2026-11-25T12:00:00', status: 'in_progress', assignedInvigilators: ['Prof. Marcus Vance', 'Sarah Connor'], totalCandidates: 142, presentCount: 139 },
  { id: 'ex-502', code: 'DB202-2026', title: 'Database Architectures & Distributed Systems', subject: 'Software Engineering', institutionId: 'inst-1', scheduledStart: '2026-11-25T14:00:00', scheduledEnd: '2026-11-25T16:30:00', status: 'upcoming', assignedInvigilators: ['Dr. Alan Turing'], totalCandidates: 58, presentCount: 0 },
  { id: 'ex-503', code: 'MA101-2026', title: 'Linear Algebra & Calculus II', subject: 'Mathematics', institutionId: 'inst-1', scheduledStart: '2026-11-24T10:00:00', scheduledEnd: '2026-11-24T13:00:00', status: 'completed', assignedInvigilators: ['Ada Lovelace', 'John von Neumann'], totalCandidates: 285, presentCount: 282 },
];

export const MOCK_CANDIDATES: Candidate[] = [
  { id: 'cand-01', admissionNo: 'ANU/2023/8891', name: 'David Kimani', institutionId: 'inst-1', examId: 'ex-501', roomId: 'rm-101', seatNumber: 'A-14', attendanceStatus: 'present', biometricVerified: true, photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
  { id: 'cand-02', admissionNo: 'ANU/2023/8892', name: 'Elena Rostova', institutionId: 'inst-1', examId: 'ex-501', roomId: 'rm-101', seatNumber: 'A-15', attendanceStatus: 'flagged', biometricVerified: true, photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
  { id: 'cand-03', admissionNo: 'ANU/2023/8893', name: 'Michael Chen', institutionId: 'inst-1', examId: 'ex-501', roomId: 'rm-101', seatNumber: 'A-16', attendanceStatus: 'present', biometricVerified: true, photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 'cand-04', admissionNo: 'ANU/2023/8894', name: 'Amina Zainab', institutionId: 'inst-1', examId: 'ex-501', roomId: 'rm-101', seatNumber: 'A-17', attendanceStatus: 'absent', biometricVerified: false, photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100' },
];

export const MOCK_DEVICES: Device[] = [
  { id: 'dev-01', name: 'RF Detector Node Alpha', type: 'rf_sensor', roomId: 'rm-101', ipAddress: '192.168.1.104', status: 'online', batteryLevel: 94, lastPing: '10s ago', hardwareType: 'ESP32', isSimulated: false },
  { id: 'dev-02', name: 'CCTV Dome Cam 01', type: 'cctv', roomId: 'rm-101', ipAddress: '192.168.1.201', status: 'online', lastPing: '1s ago', hardwareType: 'IP_Camera', isSimulated: false },
  { id: 'dev-03', name: 'SDR Wideband Receiver', type: 'rf_sensor', roomId: 'rm-101', ipAddress: '192.168.1.150', status: 'online', lastPing: '2s ago', hardwareType: 'SDR_Receiver', isSimulated: false },
  { id: 'dev-04', name: 'Simulated RF Node Beta', type: 'rf_sensor', roomId: 'rm-102', ipAddress: '127.0.0.1', status: 'online', batteryLevel: 100, lastPing: '5s ago', hardwareType: 'Arduino', isSimulated: true },
];

export const MOCK_RF_LOGS: RFSignalLog[] = [
  { id: 'rf-901', timestamp: '10:14:22', sensorId: 'dev-01', roomId: 'rm-101', frequencyMHz: 2437.5, signalStrengthDbm: -42, estimatedDistanceMeters: 1.8, suspectedDesk: 'A-15', threatLevel: 'critical', isSimulated: false },
  { id: 'rf-902', timestamp: '10:12:05', sensorId: 'dev-03', roomId: 'rm-101', frequencyMHz: 915.2, signalStrengthDbm: -68, estimatedDistanceMeters: 4.2, suspectedDesk: 'B-04', threatLevel: 'medium', isSimulated: false },
  { id: 'rf-903', timestamp: '09:45:10', sensorId: 'dev-04', roomId: 'rm-102', frequencyMHz: 433.9, signalStrengthDbm: -85, estimatedDistanceMeters: 8.0, threatLevel: 'low', isSimulated: true },
];

export const MOCK_AI_ALERTS: AIAlert[] = [
  { id: 'ai-301', timestamp: '10:15:02', roomId: 'rm-101', cameraName: 'Cam 01 - North Angle', detectionType: 'Unauthorised Device', confidenceScore: 0.94, snapshotUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', status: 'pending_review', isSimulated: false },
  { id: 'ai-302', timestamp: '10:02:40', roomId: 'rm-101', cameraName: 'Cam 03 - Rear Angle', detectionType: 'Suspicious Movement', confidenceScore: 0.81, snapshotUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400', status: 'verified_cheat', verifiedBy: 'Invigilator M. Vance', isSimulated: false },
  { id: 'ai-303', timestamp: '09:30:11', roomId: 'rm-103', cameraName: 'Cam 02 - Center', detectionType: 'Impersonation Risk', confidenceScore: 0.76, snapshotUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', status: 'false_positive', verifiedBy: 'Officer K. Smith', isSimulated: true },
];

export const MOCK_INCIDENTS: IncidentReport[] = [
  { id: 'inc-1001', ticketNo: 'INC-2026-0881', timestamp: '2026-11-25 10:16', institutionId: 'inst-1', roomId: 'rm-101', category: 'RF Detection', severity: 'critical', description: 'Strong 2.4GHz cellular/micro-transceiver RF transmission detected near desk A-15. Confirmed by RF Sensor Node Alpha.', invigilatorId: 'Prof. Marcus Vance', assignedOfficerId: 'Officer J. Blake', status: 'investigating', evidenceUrls: ['https://example.com/evidence1.png'] },
  { id: 'inc-1002', ticketNo: 'INC-2026-0879', timestamp: '2026-11-24 11:30', institutionId: 'inst-1', roomId: 'rm-103', category: 'Unauthorized Material', severity: 'medium', description: 'Candidate found with concealed handwritten notes during bathroom escort break.', invigilatorId: 'Ada Lovelace', status: 'resolved', evidenceUrls: [] },
];
