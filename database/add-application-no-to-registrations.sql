ALTER TABLE registrations
ADD COLUMN application_no VARCHAR(40) NOT NULL UNIQUE AFTER id;

CREATE UNIQUE INDEX idx_registrations_application_no
ON registrations (application_no);
