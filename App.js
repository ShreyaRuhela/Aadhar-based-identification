import React, { useState } from 'react';
import { Camera, Upload, CheckCircle2, XCircle, ShieldCheck, Loader2 } from 'lucide-react';

function App() {
  const [aadharImage, setAadharImage] = useState(null);
  const [selfieImage, setSelfieImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    if (!aadharImage || !selfieImage) return;
    setLoading(true);
    setResult(null);
    const formData = new FormData();
    formData.append('aadhar_image', aadharImage);
    formData.append('selfie_image', selfieImage);

    try {
      const response = await fetch('http://localhost:8000/api/verify', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Make sure the Backend is running at http://localhost:8000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'inline-flex', padding: '12px', backgroundColor: '#eff6ff', borderRadius: '12px', color: '#2563eb', marginBottom: '12px' }}>
            <ShieldCheck size={32} />
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: '0' }}>Identity Verification</h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Aadhaar & Age Authentication</p>
        </div>

        {/* Input Sections */}
        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}><Upload size={16} style={{marginRight: '8px'}}/> Aadhaar Card Image</label>
            <input type="file" accept="image/*" onChange={(e) => setAadharImage(e.target.files[0])} style={fileInputStyle} />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}><Camera size={16} style={{marginRight: '8px'}}/> User Selfie Image</label>
            <input type="file" accept="image/*" onChange={(e) => setSelfieImage(e.target.files[0])} style={fileInputStyle} />
          </div>

          <button 
            onClick={handleVerify} 
            disabled={loading || !aadharImage || !selfieImage}
            style={{ 
              ...buttonStyle, 
              backgroundColor: (loading || !aadharImage || !selfieImage) ? '#94a3b8' : '#2563eb' 
            }}
          >
            {loading ? <Loader2 className="spin" style={{animation: 'spin 1s linear infinite'}} /> : 'Start Verification'}
          </button>
        </div>

        {/* Result Display */}
        {result && (
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            borderRadius: '12px', 
            backgroundColor: result.age_verified ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${result.age_verified ? '#bbf7d0' : '#fecaca'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              {result.age_verified ? <CheckCircle2 color="#16a34a" /> : <XCircle color="#dc2626" />}
              <span style={{ marginLeft: '10px', fontWeight: '600', fontSize: '18px', color: result.age_verified ? '#166534' : '#991b1b' }}>
                {result.age_verified ? 'Identity Verified' : 'Verification Failed'}
              </span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '14px' }}>
              <div style={statBoxStyle}><strong>Face Match:</strong> {result.face_match ? '✅' : '❌'}</div>
              <div style={statBoxStyle}><strong>Age 18+:</strong> {result.is_adult ? '✅' : '❌'}</div>
              <div style={{ ...statBoxStyle, gridColumn: 'span 2' }}>
                <strong>Similarity Score:</strong> {(result.similarity_score * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// Simple CSS-in-JS Styles
const inputGroupStyle = { display: 'flex', flexDirection: 'column', gap: '8px' };
const labelStyle = { fontSize: '14px', fontWeight: '500', color: '#475569', display: 'flex', alignItems: 'center' };
const fileInputStyle = { padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px' };
const buttonStyle = { padding: '12px', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'center', transition: 'all 0.2s' };
const statBoxStyle = { backgroundColor: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.05)' };

export default App;
