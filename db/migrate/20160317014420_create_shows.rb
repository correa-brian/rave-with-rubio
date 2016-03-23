class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :artist
      t.string :venue_name
      t.references :election
      t.timestamps
    end
  end
end
