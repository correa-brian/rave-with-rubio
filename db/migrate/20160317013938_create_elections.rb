class CreateElections < ActiveRecord::Migration
  def change
    create_table :elections do |t|
      t.string :zip_code
      t.integer :radius
      t.string :date
      t.timestamps
    end
  end
end
