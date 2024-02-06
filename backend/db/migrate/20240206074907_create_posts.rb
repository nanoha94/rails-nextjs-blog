class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :context
      t.datetime :start_time, null: false
      t.datetime :end_time
      t.integer :status, default: 0, null: false

      t.timestamps
    end
  end
end
