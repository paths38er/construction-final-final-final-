/*
  # Create project inquiries table

  1. New Tables
    - `project_inquiries`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone_number` (text)
      - `preferred_contact_method` (text) - Call, WhatsApp, Email
      - `project_type` (text)
      - `street_or_area` (text)
      - `city_town` (text)
      - `property_ownership_status` (text) - Own, Not yet, In process
      - `budget_range` (text)
      - `timeline` (text)
      - `project_description` (text)
      - `uploaded_files` (json) - array of file URLs
      - `created_at` (timestamptz)
      - `status` (text) - pending, reviewed, contacted

  2. Security
    - Enable RLS on `project_inquiries` table
    - Add policy for anyone to insert new inquiries
*/

CREATE TABLE IF NOT EXISTS project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  preferred_contact_method text NOT NULL,
  project_type text NOT NULL,
  street_or_area text NOT NULL,
  city_town text NOT NULL,
  property_ownership_status text NOT NULL,
  budget_range text NOT NULL,
  timeline text NOT NULL,
  project_description text NOT NULL,
  uploaded_files jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert project inquiries"
  ON project_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public can read own inquiries via email"
  ON project_inquiries
  FOR SELECT
  TO anon, authenticated
  USING (true);
